import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { addReminder } from '../../actions/smsReminders';
import { getAllInvoices, getInvoice } from '../../actions/invoices';

const ReminderForm = props => {
  return (
    <div>
      <div>
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="daily"
                checked={props.option === 'daily'}
                onChange={props.handleRadio}
              />
              Daily
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="weekly"
                checked={props.option === 'weekly'}
                onChange={props.handleRadio}
              />
              Weekly
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="monthly"
                checked={props.option === 'monthly'}
                onChange={props.handleRadio}
              />
              Monthy
            </label>
          </div>
          <div>
            <label>
              Custom message:
              <input type="text" onChange={props.handleMessage} />
            </label>
          </div>
        </form>
      </div>
      <Dropdown
        placeholder="Invoices"
        search
        selection
        options={props.invoices.map((invoice, i) => {
          return (
            <div key={i}>
              <p onClick={() => props.getInvoice(invoice._id, invoice.phone.number)}>
                {invoice.clientName}
              </p>
            </div>
          );
        })}
      />
      <button
        onClick={() => {
          props.addReminder(props.formData, props.history);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default connect(
  null,
  { addReminder },
)(ReminderForm);