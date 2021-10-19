import React from 'react';
import { diffDates } from '../../utils/functions';

const Activity = ({activity, setActivities}) => {
  return (
    <div className="card block">
      <div className="card-header">
        <h2 className="card-header-title">
          {activity.nombre}
        </h2>
      </div>

      <div className="card-content">
        <p className="is-size-5">{activity.descripcion}</p>
      </div>

      <div className="card-footer">
        <p className="card-footer-item">Duración: {diffDates(activity.inicio, activity.final)} días</p>
        <p className="card-footer-item">Tiempo Restante: {diffDates(new Date(), activity.final)} días</p>
      </div>
    </div>
  )
}

export default Activity;