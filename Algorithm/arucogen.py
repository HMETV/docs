# this code generates the tags with the numbers embedded in them
import cv2 as cv
from cv2 import aruco

# Dictionary to specify the type of the marker
marker_dict = aruco.getPredefinedDictionary(aruco.DICT_5X5_250)

# Constants
MARKER_SIZE = 400  # pixels

# Generating unique IDs using a for loop
for id in range(20):  # Generating 20 markers
    # Using function to draw a marker
    marker_image = aruco.generateImageMarker(marker_dict, id, MARKER_SIZE)

    # Adding text displaying the ID of the marker
    cv.putText(marker_image, str(id), (int(MARKER_SIZE * 0.2), int(MARKER_SIZE * 0.8)),
               cv.FONT_HERSHEY_SIMPLEX, 4, (255, 255, 255), 10, cv.LINE_AA)

    # Displaying and saving the marker
    cv.imshow("Marker", marker_image)
    cv.imwrite(f"markers/marker_{id}.png", marker_image)
    cv.waitKey(0)  # Wait for a key press to proceed to the next marker

cv.destroyAllWindows()  # Close any open windows
