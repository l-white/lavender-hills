import React from "react";
import styled from 'styled-components';

const properties = [
  {
    id: 1,
    image: "images/murray_ave.jpg",
    alt: "Murray Avenue duplex",
    name: "Murray Avenue",
    address1: "2937 N Murray Avenue",
    address2: "Milwaukee, WI 53211",
    management: "Bella Properties",
    rent: 1575,
    bedroomsPerUnit: 3,
    yearBuilt: 1899,
    units: 2,
    neighborhood: "UWM",
    vacancies: 0,
    phone: "414-777-5555",
    description: "Located in the heart of Milwaukee near the University of Wisconsin-Milwaukee campus, this Murray Avenue duplex is popular among college students. Property manager Michael Vitucci keeps this top-notch duplex running smoothly and has a long history of working well with student tenants.",
  },
  {
    id: 2,
    image: "images/riverwest.jpg",
    alt: "Riverwest four family property",
    name: "4 Family",
    address: "",
    management: "Matt Leonard",
    rent: 750,
    bedroomsPerUnit: 1,
    yearBuilt: 1899,
    units: 4,
    neighborhood: "Riverwest",
    vacancies: 1,
    phone: "414-777-5555",
    description: "Close to downtown Milwaukee and the University of Wisconsin-Milwaukee, this four-family property in Riverwest has much more to offer than a great location. The neighborhood features some great ethnic restaurants, Art Walk, and annual festivals. Landlord Scot Henry has made several recent upgrades to this property, including a brand-new parking lot for tenants and fresh exterior paint and siding.",
  },
  {
    id: 3,
    image: "images/delaware_ave.jpg",
    alt: "Delaware Avenue duplex",
    name: "Delaware Ave",
    address1: "3006 S. Delaware Avenue",
    address2: "Milwaukee, WI 53207",
    management: "Scot Henry",
    rent: 1250,
    bedroomsPerUnit: 2,
    yearBuilt: 1913,
    units: 2,
    neighborhood: "Bay View",
    vacancies: 0,
    phone: "414-777-5555",
    description: "Nestled in a quiet, residential neighborhood in Bay View, Delaware Avenue residents live within walking distance of parks and a wooded area, perfect for outdoor enthusiasts, avid runners and walkers, and those who wish to remain in Milwaukee while living close to nature.",
  },
  {
    id: 4,
    image: "images/wentworth_ave.jpg",
    alt: "Wentworth Avenue duplex",
    name: "Wentworth Ave",
    address1: "2868 S. Wentworth Avenue",
    address2: "Milwaukee, WI 53207",
    management: "Scot Henry",
    rent: 1450,
    bedroomsPerUnit: 2,
    yearBuilt: 1913,
    units: 2,
    neighborhood: "Bay View",
    vacancies: 0,
    phone: "414-777-5555",
    description: "This Wentworth Avenue duplex in Bay View is just a ten-minute drive from downtown Milwaukee and overlooks Lake Michigan. During the summer and early autumn, tenants can step outside and enjoy access to fresh produce at a robust farmer's market every Saturday morning that is just a few paces from their back door. Tenants also enjoy close proximity to some excellent restaurants and coffee houses.",
  },
];

const PropertyImg = {
  display: "flex",
  width: "75%",
  margin: "0 auto",
  borderRadius: "25px",
};

const PropertyDesc = styled.div`
	display: inline;
`;

const PropertyDescription = {
  display: "flex",
  width: "70%",
  margin: "0 auto 10px auto",
  textAlign: "justify",
}

const Property = () => (
  <>
  {properties.map(property => (
    <div>
    <img alt={property.alt} src={property.image} style={PropertyImg} />
    <div key={property.id}><PropertyDesc>
      <h2>{property.name}</h2>
      <p><strong>Address:</strong><br />{property.address1}<br />{property.address2}</p>
      <p>Management: {property.management}</p>
      <p>Rent: ${property.rent} per unit</p>
      <p>Number of units: {property.units}</p>
      <p>Bedrooms per unit: {property.bedroomsPerUnit}</p>
      <p>Neighborhood: {property.neighborhood}</p>
      <p>Current vacancies: {property.vacancies}</p>
      <p>Phone: {property.phone}</p>
      <p style={PropertyDescription}>{property.description}</p></PropertyDesc>
    </div>
    </div>
  ))}
  </>
  );

export default Property;