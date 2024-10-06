import React, { useState } from 'react';
import { Button, Modal, DatePicker, TimePicker, Input } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import './CreateEventBtn.css';



const CreateEventBtn = () => {

    // Modal Open/Close
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  // Date Picker
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Event
      </Button>
      <Modal
        title="Create Event"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
        okText="Confirm"
        cancelButtonProps={{
            style: {
                borderRadius: '4px',
                width: '100px',
            }
        }}
        okButtonProps={{
            style: {
                borderRadius: '4px',
                width: '100px',
            },
        }}
      >
        <p className='input-title'>Title</p>
        <Input placeholder="" />
        <p className='input-title'>Organization</p>
        <Input placeholder="" />
        <p className='input-title'>Description</p>
        <Input placeholder="" />
        <p className='input-title'>Location</p>
        <Input placeholder="" />
        <p className='input-title'>Date & Time</p>
        <div style={{display:"flex", gap: "20px"}}>
        <DatePicker
            className='internal-text'
            id='date-picker'
            onChange={onChange}
            style={{ padding: '10px', border: '1px solid #d9d9d9', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
          />
          <TimePicker
            onChange={onChange}
            defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
            style={{ padding: '10px', border: '1px solid #d9d9d9', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateEventBtn;