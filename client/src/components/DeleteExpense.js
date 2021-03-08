import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteExpense = (props) => {
  const [modalShow, setModalShow] = useState(props.setModalShow);
  const [expensesList, setExpensesList] = useState([]);
  //console.log(props.expenseData);

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log("handleSubmit");
    console.log(props.expenseData.id);
    handleDeleteExpense(props.expenseData.id);
  };

  const handleDeleteExpense = (expense) => {
    fetch(`http://localhost:4000/api/expenses/delete-expense/${expense}`, {
      method: "DELETE",
      body: JSON.stringify(expense),
    }).then((response) => {
      console.log("DELETE response:", response);
      window.location.reload(false);
    });
  };

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this expense: (expense item to
            come). This cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="danger">
            Yes, delete expense
          </Button>
          <Button onClick={props.onHide}>Cancel, keep expense</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export { DeleteExpense };
