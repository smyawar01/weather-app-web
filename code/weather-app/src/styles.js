// CenteredDiv.js
import styled from 'styled-components';


// Create a styled container
export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column; /* Arrange children vertically */
  justify-content: space-between; /* Space between children */
  height: 100vh; /* Full viewport height */
  padding: 20px; /* Optional padding */
  background-color: #f0f0f0; /* Light gray background */
`;

export const ContainerDiv = styled.div`
  background-color: white; /* White background for child */
  padding: 20px; /* Padding for child */
`;

// Create a styled div
export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100; /* Full viewport height */
  width: 100; /* Full viewport height */
`;

export const Content = styled.div`
  text-align: center; /* Center text */
  padding: 20px;
  border: 1px solid #ccc; /* Optional border */
  background-color: white; /* White background for content */
  border-radius: 5px; /* Rounded corners */
`;