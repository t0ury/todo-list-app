/** @format */
import PropTypes from 'prop-types';

const Tasks = ({children}) => {
  return (
    <ul className="task-list flex flex-col divide-y-4 divide-gray-200">
      {children}
    </ul>
  );
};
Tasks.propTypes = {
  children: PropTypes.element.isRequired, 
};
export default Tasks;
