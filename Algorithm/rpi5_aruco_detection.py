import cv2 as cv
from cv2 import aruco
from picamera2 import Picamera2

# Initialize Picamera2
picam2 = Picamera2()
preview_config = picam2.create_preview_configuration(main={"size": (1280, 720)})
picam2.configure(preview_config)
picam2.start()

# ArUco marker setup
marker_dict = aruco.getPredefinedDictionary(aruco.DICT_5X5_250)
param_markers = aruco.DetectorParameters()

try:
    while True:
        # Capture an image with Picamera2
        frame = picam2.capture_array()
        
        # Detect ArUco markers in the grayscale frame
        marker_corners, marker_IDs, _ = aruco.detectMarkers(frame, marker_dict, parameters=param_markers)
        
        # If markers are detected
        if marker_IDs is not None:
            # Print the IDs of detected markers
            print(f"Detected marker IDs: {marker_IDs.ravel()}")
        else:
            print("Nothing")

        # Display the frame (optional, you can remove this if you don't want a window)
        cv.imshow('Frame', frame)
        
        # Check for 'q' key to quit
        if cv.waitKey(1) & 0xFF == ord('q'):
            break

finally:
    # Properly close the camera resource and OpenCV windows
    picam2.stop()
    cv.destroyAllWindows()