import { useContext, useState } from "react";
import { FaWallet, FaFileAlt, FaRupeeSign, FaCreditCard } from "react-icons/fa";
import { IoPricetagSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function Popup() {
  const [selectedDate, setSelectedDate] = useState(null);

 

  return (
    <div className="popup-positioner">
      <div className="popup-container">
        <div className="overlay"></div>
        <div className="add-transaction">
      <FaWallet className="wallet"/>
      <div className="text">
        <h2>Add Transaction</h2>
        <p>Record User Income & Expenses</p>
      </div>
      </div>
      <>
        <div className="transaction-list">
          <div>
          <label>Transaction Name</label>
          <div className="input">
            <FaFileAlt className="logo"/>
          <input type="text" placeholder=" e.g. Groceries" />
          </div>
          </div>
          <div>
            <label>Transaction type</label>
            <div className="input select-input">
              <IoPricetagSharp className="logo" />
                <select>
                  <option>Select Type</option>
                <option>Depoit</option>
                <option>Withdraw</option>
                <option>From Credit Card</option>
            </select>
            </div>
          </div>     
          <div>
            <label>Date</label>
            <div className="input">
              <MdDateRange className="logo" />
              <DatePicker
                selected={selectedDate}
                onChange={setSelectedDate}
                placeholderText="Choose date"
                dateFormat="dd/MM/yyyy"
                className="date-picker-input"
              />
            </div>
            </div>
            <div>
              <label>Amount</label>
              <div className="input">
                <FaRupeeSign className="logo" />
                <input type="text" placeholder="0.00" />
              </div>
            </div>
            <div className="full-width">
              <label>Payment Type <span>(Optional)</span></label>
              <div className="input">
                <FaCreditCard className="logo" />
                <input type="text" placeholder="Payment Method" />
              </div>
            </div>
            <div className="btn">
              <button className="add">Add Transaction</button>
              <button className="cancel">Cancel</button>

            </div>
        </div>
      </>
      </div>
    </div>
  )
}

export default Popup
