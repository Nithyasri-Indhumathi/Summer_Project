import geopandas as gpd
from tkinter import Tk, filedialog
from fpdf import FPDF

def calculate_shapefile_area(shapefile_path):
    try:
        # Read the shapefile using GeoPandas
        gdf = gpd.read_file(shapefile_path)
        
        # Calculate the area for each geometry in the GeoDataFrame
        gdf['area'] = gdf.geometry.area
        
        return gdf
        
    except Exception as e:
        print("Error:", e)
        return None

def generate_pdf_report(report_data):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", "B", 16)
    pdf.multi_cell(0, 10, report_data)
    pdf.output("report.pdf")

def main():
    # Create a Tkinter root window (hidden)
    root = Tk()
    root.withdraw()  # Hide the main window
    
    # Open file dialogs for selecting the shapefiles
    main_shapefile_path = filedialog.askopenfilename(filetypes=[("Shapefiles", "*.shp")])
    cut_shapefile_path = filedialog.askopenfilename(filetypes=[("Shapefiles", "*.shp")])
    
    if main_shapefile_path and cut_shapefile_path:
        main_gdf = calculate_shapefile_area(main_shapefile_path)
        cut_gdf = calculate_shapefile_area(cut_shapefile_path)
        
        if main_gdf is not None and cut_gdf is not None:
            total_used_area = main_gdf['area'].sum()
            total_cut_area = cut_gdf['area'].sum()
            #unused_area = total_used_area - total_cut_area
            
            # Get farm and farmer details
            farm_name = input("Enter the Name of the Farm: ")
            farmer_name = input("Enter the Farmer's Name: ")
            
            # Calculate total area including used and cut areas
            total_area = total_used_area + total_cut_area
            
            # Create the report data
            report_data = f"Farm Name: {farm_name}\nFarmer's Name: {farmer_name}\n\n"
            report_data += "Unused Areas for Divided Polygons:\n"
            for i, area in enumerate(main_gdf['area'], start=1):
                report_data += f"Unused Area {i}: {area:.2f} acres ({area * 43560:.2f} sq.ft)\n"
            
            report_data += "\nUsed Areas for Cut Regions:\n"
            for i, area in enumerate(cut_gdf['area'], start=1):
                report_data += f"Used Area {i}: {area:.2f} acres ({area * 43560:.2f} sq.ft)\n"
            
            report_data += f"\nTotal Area (including used and unused areas): {total_area:.2f} acres ({total_area * 43560:.2f} sq.ft)\n"
            
            # Generate the PDF report
            generate_pdf_report(report_data)
            
        else:
            print("Error processing shapefiles.")
    else:
        print("Shapefile(s) not selected.")

if __name__ == "__main__":
    main()
