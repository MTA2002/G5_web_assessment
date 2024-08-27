# Blog Web Application

This project is a web application for displaying and viewing blog posts, built according to a Figma design. The application consists of two main pages: a Blog List and a Blog Detail page. It also includes a search functionality, proper data handling with Redux Toolkit, and follows a clear and organized code structure.

## Features

### 1. Blog List Page

- **Display Blog List**: Shows a list of blogs with all details as per the Figma design.
- **Layout Elements**: Includes header and footer components as shown in the design.
- **Search Functionality**: Allows users to filter blogs based on search input (real-time search is not required).

### 2. Blog Detail Page

- **Blog Details**: Displays every detail of a selected blog, following the design specifications.
- **Consistent Layout**: Includes header and footer, consistent with the Blog List page.

### 3. Data Handling

- **API Integration**: Fetches blog data from the provided API endpoint.
- **State Management**: Uses Redux Toolkit to manage the application state.
- **Error Handling**: Logs errors to the console and ensures a smooth user experience.

### 4. Code Structure and Naming Conventions

- **Folder Structure**: Follows a clear and organized folder structure:
  - Components are placed in the `components` folder.
  - Files are named using `kebab-case`.
  - Variables and functions are named using `camelCase`.
  - Component names use `PascalCase`.
- **File Organization**: Files are organized based on pages and features, ensuring clarity and maintainability.

### 5. User Interface

- **Figma Design**: Implements the user interface exactly as specified in the Figma design.
- **Attention to Detail**: Focuses on layout, typography, colors, and component styling.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MTA2002/G5_web_assessment.git
   cd blog-web-app
   ```
2. Run the app:
   '''
   npm run dev
   '''

### Screen-Shots

<img src='public/Screenshot 2024-08-27 at 6.18.28 in the evening.png'>
<img src='public/Screenshot 2024-08-27 at 6.21.32 in the evening.png'>
