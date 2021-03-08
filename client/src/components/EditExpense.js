import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const EditExpense = (props) => {
  const [modalShow, setModalShow] = useState(props.setModalShow);
  const [expensesList, setExpensesList] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    projectedExpense: 0,
    actualExpense: 0,
  });
  //console.log(props.expenseData);

  const handleInputChange = (e) => {
    e.preventDefault();
    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log("handleSubmit");
    console.log(props.expenseData.id);
    handleEditExpense(props.expenseData.id);
  };

  const handleEditExpense = (expense) => {
    console.log("handleEditExpense:", expense);
    const foundExpense = expensesList.findIndex((expenseEl) => {
      console.log("expenseEl:", expenseEl);
      return expenseEl._id === expense._id;
    });
    console.log("foundExpense:", foundExpense);
    const newExpenses = [...expensesList];
    newExpenses[foundExpense] = expense;
    setExpensesList(newExpenses);
    fetch(`http://localhost:4000/api/expenses/update-expense/${expense._id}`, {
      method: "PUT",
      body: JSON.stringify(expense),
    }).then((response) => {
      console.log("PUT response:", response);
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
            Edit Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Row style={{ margin: "20px -5px" }}>
              <Col xs={7}>
                <Form.Control
                  placeholder="Expense Item"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Estimated"
                  name="estimated"
                  value={formState.projectedExpense}
                  onChange={handleInputChange}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Actual"
                  name="actual"
                  value={formState.actualExpense}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="warning" type="submit">
            Yes, edit expense
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

export { EditExpense };
