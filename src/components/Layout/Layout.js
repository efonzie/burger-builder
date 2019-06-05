import React from 'react';

const layout = (props) => (
    <React.Fragment>
        <div>Toolabar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;