import React from 'react';
import { Container } from 'react-bootstrap';

const BookingList = () => {
  return (
    <Container>
      <div class="row">
        <div class="col-sm-6">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookingList;