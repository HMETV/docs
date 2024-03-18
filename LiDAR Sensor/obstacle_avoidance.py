#!/usr/bin/env python

import rospy
from sensor_msgs.msg import LaserScan
from geometry_msgs.msg import Twist

# Define robot dimensions
robot_length = 3.0  # in feet
robot_width = 2.0   # in feet
clearance = 0.5     # in feet

def laser_callback(msg):
    # Get the minimum distance from the laser scan data
    min_distance = min(msg.ranges)

    # Calculate safe distance considering robot dimensions and clearance
    safe_distance = max(robot_length, robot_width) / 2 + clearance

    # Determine if an obstacle is within safe distance
    if min_distance < safe_distance:
        # If obstacle is too close, stop the robot
        twist_msg = Twist()
        twist_msg.linear.x = 0.0
        twist_msg.angular.z = 0.0
    else:
        # If no obstacle is within safe distance, move forward
        twist_msg = Twist()
        twist_msg.linear.x = 0.2  # adjust linear velocity as needed
        twist_msg.angular.z = 0.0

    # Publish velocity commands
    pub.publish(twist_msg)

def main():
    rospy.init_node('obstacle_avoidance')
    rospy.Subscriber('/scan', LaserScan, laser_callback)
    global pub
    pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)
    rospy.spin()

if __name__ == '__main__':
    main()
