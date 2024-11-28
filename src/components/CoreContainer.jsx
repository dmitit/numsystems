import PropTypes from "prop-types";

function CoreContainer(props) {
   return (
      <div className="max-w-[1366px] mx-auto px-[1.5rem] relative z-10">
         {props.children}
      </div>
   );
}

CoreContainer.propTypes = {
   children: PropTypes.node,
};

export default CoreContainer;
