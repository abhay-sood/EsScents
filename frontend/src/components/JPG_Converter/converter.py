import os
from rembg import remove

# Paths for input and output folders
INPUT_FOLDER = "input"
OUTPUT_FOLDER = "output"

# Ensure output folder exists
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

def process_images():
    # List all JPG files in the input folder
    for file_name in os.listdir(INPUT_FOLDER):
        if file_name.lower().endswith(".jpg") or file_name.lower().endswith(".jpeg"):
            input_path = os.path.join(INPUT_FOLDER, file_name)
            output_path = os.path.join(OUTPUT_FOLDER, file_name.replace(".jpg", ".png").replace(".jpeg", ".png"))
            
            # Open the input file
            with open(input_path, "rb") as input_file:
                input_data = input_file.read()

            # Remove background
            print(f"Processing {file_name}...")
            output_data = remove(input_data)

            # Save the output file
            with open(output_path, "wb") as output_file:
                output_file.write(output_data)
            print(f"Saved to {output_path}")

if __name__ == "__main__":
    process_images()
    print("All images processed.")