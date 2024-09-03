HotelReservation.xcodeproj
│
├── HotelReservation
│   ├── AppDelegate.swift
│   ├── SceneDelegate.swift
│   ├── Models
│   │   ├── Hotel.swift
│   │   ├── Room.swift
│   │   └── Reservation.swift
│   ├── Controllers
│   │   ├── HotelController.swift
│   │   ├── RoomController.swift
│   │   └── ReservationController.swift
│   ├── Views
│   │   └── ReservationView.swift
│   └── Network
│       └── APIClient.swif
└── README.md

# Hotel Reservation System

## Overview
A simple back-end project for managing hotel reservations. It includes models for hotels, rooms, and reservations, along with controllers to manage the logic.

## Project Structure
The project is organized into the following directories:

- **HotelReservation**: Contains the core application files.
  - **AppDelegate.swift**: Manages the app's lifecycle.
  - **SceneDelegate.swift**: Manages app scenes and their lifecycle.
  - **Models**: Includes data models like `Hotel.swift`, `Room.swift`, and `Reservation.swift`.
  - **Controllers**: Handles business logic for hotels, rooms, and reservations.
  - **Views**: Defines the user interface components, such as `ReservationView.swift`.
  - **Network**: Manages network requests via `APIClient.swift`.
