import cv2
import numpy as np

# Function to find and decode ArUco tags
def find_aruco(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    aruco_dict = cv2.aruco.Dictionary_get(cv2.aruco.DICT_6X6_250)
    parameters = cv2.aruco.DetectorParameters_create()
    corners, ids, _ = cv2.aruco.detectMarkers(gray, aruco_dict, parameters=parameters)
    return corners, ids

# Function to move the robot based on ArUco tag detection
def move_robot(direction):
    # Add code here to move the robot in the specified direction
    print("Moving robot in direction:", direction)

# Main function
def main():
    cap = cv2.VideoCapture(0)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        corners, ids = find_aruco(frame)

        if ids is not None:
            for i, id in enumerate(ids):
                if id == 0:  # Change 0 to the ID of your first ArUco tag
                    # Move the robot in the first direction
                    move_robot("Direction 1")
                elif id == 1:  # Change 1 to the ID of your second ArUco tag
                    # Move the robot in the second direction
                    move_robot("Direction 2")
                elif id == 2:  # Change 2 to the ID of your third ArUco tag
                    # Move the robot in the third direction
                    move_robot("Direction 3")

        cv2.imshow("Frame", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
