import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { queueListRequest } from '../../queue/queue.action';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Sort } from '../../../../common/consts';

const ListQueueComponent = props => {
  let {
    queueReducer,
    queueListRequest,
    clinicReducer: { current },
  } = props;
  useEffect(() => {
    queueListRequest({
      sorts: { number: Sort.ASD },
    });
  }, [current]);

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Queue List</h3>
        <ListGroup>
          {queueReducer.queueList.length > 0 &&
            queueReducer.queueList.map(queue => (
              <ListGroupItem
                key={queue._id}
                className={
                  !queue.active
                    ? 'disabled'
                    : queue._id === current.queueId && 'active'
                }
              >
                <div>
                  <div>
                    <div>{queue.number}</div>
                    <div>{queue.name} </div>
                  </div>
                </div>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  queueListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListQueueComponent);
