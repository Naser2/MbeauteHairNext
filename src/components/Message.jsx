'use client';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useGlobalContext } from '@/context/GlobalContext';

const Message = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const { setUnreadCount } = useGlobalContext();

  const handleReadClick = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'PUT',
      });

      if (res.status === 200) {
        const { read } = await res.json();
        setIsRead(read);
        setUnreadCount((prevCount) => (read ? prevCount - 1 : prevCount + 1));
        if (read) {
          toast.success('Marked as read');
        } else {
          toast.success('Marked as new');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  const handleDeleteClick = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        setIsDeleted(true);
        setUnreadCount((prevCount) => prevCount - 1);
        toast.success('Message Deleted');
      }
    } catch (error) {
      console.log(error);
      toast.error('Message was not deleted');
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className='relative bg-white p-4 rounded-md shadow-md border border-gray-200'>
      {!isRead && (
        <div className='absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md'>
          New
        </div>
      )}
      <h2 className='text-xl mb-4'>
        <span className='font-bold'>Property Inquiry:</span>{' '}
        {message.property.name}
      </h2>
      <p className='text-gray-700'>{message.body}</p>

      <ul className='mt-4'>
        

      <div
  id="d033cf0f-e119-1634-7f7f-7f7f7f7f7f7f_76f69fb0-f30e-11ee-9be0-37d37643f0cc"
  className="message"
>
  <div className="w7m89t0 w7m89tca">
    <button
      className="QwpljBX"
      data-testid="avatar"
      style={{ borderRadius: "50%" }}
    >
      <figure
        className="XzsQBuC"
        title="userface_nomi"
        style={{ fontSize: 32, backgroundColor: "rgb(227, 118, 39)" }}
      >
        <figcaption className="wueBWNM">u</figcaption>
        <img
          alt="userface_nomi"
          className="vMVfoJD"
          src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/51666762b86a449d8c6c78245dd45fe6-1673180406620/9abfc4de-ef83-45fe-bd66-7a4389941ee1.jpg"
          width="100%"
          role="img"
          loading="lazy"
        />
      </figure>
    </button>
  </div>
  <div className="message-content">
    <div className="header flex flex-justify-between">
      <div className="header flex flex-items-center">
        <span className="sender" data-testid="basic-message-header">
          Nomi
        </span>
        <div
          className="w7m89t0 w7m89tjx"
          data-testid="message-header-timestamp"
        >
          <time>Apr 05, 2024, 7:36 AM</time>
        </div>
        <div />
      </div>
      <div className="flex">
        <span className="ucgAJ7j" aria-expanded="false">
          <button
            className="sqTmH8M reply-button flex flex-items-center tbody-7"
            data-testid="reply-to-message-button"
          >
            <div className="flex flex-center">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 13"
                xmlns="http://www.w3.org/2000/svg"
                fill="#74767E"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.626.31a.75.75 0 0 1 .457.69v2.504c1.772.088 3.765.507 5.403 1.614C14.41 6.418 15.75 8.601 15.75 12a.75.75 0 0 1-1.392.388c-.854-1.413-1.671-2.249-2.802-2.763-1.042-.474-2.42-.706-4.473-.75v2.478a.75.75 0 0 1-1.272.538L.478 6.715a.75.75 0 0 1 0-1.077L5.81.462a.75.75 0 0 1 .815-.153Zm-4.55 5.866L5.584 9.58V8.118a.75.75 0 0 1 .75-.75c2.525 0 4.376.224 5.844.892a6.513 6.513 0 0 1 1.704 1.12c-.449-1.41-1.266-2.365-2.234-3.019-1.525-1.03-3.52-1.376-5.314-1.376a.75.75 0 0 1-.75-.75V2.773L2.077 6.176Z"
                />
              </svg>
            </div>
          </button>
        </span>
        <div className="flex">
          <div className="yvFG0X6" aria-expanded="false">
            <span className="ucgAJ7j" aria-expanded="false">
              <button
                className="sqTmH8M more-actions-button flex flex-items-center tbody-7"
                data-testid="report-menu-button"
              >
                <div className="flex flex-center">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                  >
                    <circle cx={2} cy={2} r={2} />
                    <circle cx={8} cy={2} r={2} />
                    <circle cx={14} cy={2} r={2} />
                  </svg>
                </div>
              </button>
            </span>
          </div>
          <div
            className="jHG_6Wc dVTvdSS drop-shadow-z2"
            style={{
              position: "absolute",
              top: "3081.51px",
              left: 511,
              maxWidth: 500,
              backgroundColor: "rgb(255, 255, 255)",
              zIndex: 11500,
              visibility: "hidden",
              opacity: 0,
              display: "none"
            }}
          >
            <div className="report-popover-content">
              <div className="w7m89tph w7m89thk w7m89t0">
                <div className="w7m89tk7 w7m89tmu w7m89tx9 w7m89t0 w7m89ts4 w7m89t1d3 w7m89t115">
                  <button
                    data-testid="report-button"
                    role="button"
                    className="pZdf9hD Doz3_e8 tG1GthI Rj3rptM _163qxn0"
                  >
                    <div className="w7m89txe w7m89t0 w7m89ts4 w7m89t1d3 w7m89tzr w7m89t115">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#62646A"
                      >
                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 2c1.245 0 2.459.39 3.47 1.115L3.116 11.47A5.99 5.99 0 0 1 8 2Zm0 12a5.961 5.961 0 0 1-3.47-1.115l8.355-8.356A5.99 5.99 0 0 1 8 14Z" />
                      </svg>
                      <p className="w7m89t1z2 w7m89t156 w7m89t13d w7m89t6 w7m89t2">
                        Mark as spam
                      </p>
                    </div>
                  </button>
                  <button
                    data-testid="report-button"
                    role="button"
                    className="pZdf9hD Doz3_e8 tG1GthI Rj3rptM _1ebuowy0"
                  >
                    <div className="w7m89txe w7m89t0 w7m89ts4 w7m89t1d3 w7m89tzr w7m89t115">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#D93C3C"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.456.132c-2.588 1.32-3.822.877-5.146.404C8.04.08 6.687-.404 3.975.61A15.74 15.74 0 0 0 3 1.013V12a11.9 11.9 0 0 1 1-.443c.35-.135.683-.242 1-.324 1.86-.48 3.18-.104 4.501.27 1.634.464 3.268.928 5.92-.225a.981.981 0 0 0 .579-.9V.963c0-.784-.838-1.19-1.544-.831ZM14 9.688V2.515c-.978.357-1.867.51-2.722.49-1.097-.028-2-.355-2.618-.578l-.156-.056c-.644-.229-1.094-.364-1.69-.36-.425.004-1.004.083-1.814.356v6.815a8.677 8.677 0 0 1 1.584-.174c1.325-.021 2.426.279 3.286.521l.115.033c.843.238 1.423.402 2.088.433.512.025 1.127-.032 1.927-.307ZM2 1a.999.999 0 1 0-2 0V15.5c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5V1Z"
                        />
                      </svg>
                      <p className="w7m89t1za w7m89t156 w7m89t13d w7m89t6 w7m89t2">
                        Report
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span className="">
      <div className="">
        <div>
          <div>
            <p className="message-body">
              I hope you are Doing well this time i am in the hospital my team
              partner has operated today. Maybe today I can't share with you the
              work today please extend one day delivery time and I will share
              you the work after some hours
            </p>
          </div>
        </div>
      </div>
    </span>
    <span className="" />
  </div>
</div>

        <li>
          <strong>Name:</strong> {message.sender.username}
        </li>

        <li>
          <strong>Reply Email:</strong>{' '}
          <a href={`mailto:${message.email}`} className='text-blue-500'>
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply Phone:</strong>{' '}
          <a href={`tel:${message.phone}`} className='text-blue-500'>
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received:</strong>{' '}
          {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>
      <button
        onClick={handleReadClick}
        className={`mt-4 mr-3 ${
          isRead ? 'bg-gray-300' : 'bg-blue-500 text-white'
        } py-1 px-3 rounded-md`}
      >
        {isRead ? 'Mark As New' : 'Mark As Read'}
      </button>
      <button
        onClick={handleDeleteClick}
        className='mt-4 bg-red-500 text-white py-1 px-3 rounded-md'
      >
        Delete
      </button>
    </div>
  );
};
export default Message;
