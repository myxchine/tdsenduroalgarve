import { Bike } from "@/app/types";

export default function Specs({ bike }: { bike: Bike }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Brand</td>
          <td>{bike.brand}</td>
        </tr>
        {bike.engine.powerHP && (
          <tr>
            <td>Power (HP)</td>
            <td>{bike.engine.powerHP}</td>
          </tr>
        )}
        {bike.engine.torqueNM && (
          <tr>
            <td>Torque (NM)</td>
            <td>{bike.engine.torqueNM}</td>
          </tr>
        )}
        <tr>
          <td>Engine Stroke</td>
          <td>{bike.engine.stroke}</td>
        </tr>
        <tr>
          <td>Displacement (cc)</td>
          <td>{bike.engine.displacement}</td>
        </tr>
        <tr>
          <td>Cylinders</td>
          <td>{bike.engine.cylinders}</td>
        </tr>

        <tr>
          <td>Weight (dry)</td>
          <td>{bike.specs.weight} kg</td>
        </tr>
        <tr>
          <td>Fuel Capacity (l)</td>
          <td>{bike.specs.fuelCapacity}</td>
        </tr>
        <tr>
          <td>Seat Height (mm)</td>
          <td>{bike.specs.seatHeight}</td>
        </tr>
        <tr>
          <td>Gears</td>
          <td>{bike.specs.gears}</td>
        </tr>
        <tr>
          <td>Start Type</td>
          <td>{bike.specs.startType}</td>
        </tr>
        <tr>
          <td>Suspension Front (mm)</td>
          <td>{bike.suspension.front}</td>
        </tr>
        <tr>
          <td>Suspension Rear (mm)</td>
          <td>{bike.suspension.rear}</td>
        </tr>
        <tr>
          <td>Frame</td>
          <td>{bike.frame}</td>
        </tr>
        <tr>
          <td>Brakes Front (mm)</td>
          <td>{bike.brakes.front}</td>
        </tr>
        <tr>
          <td>Brakes Rear (mm)</td>
          <td>{bike.brakes.rear}</td>
        </tr>
        <tr>
          <td>Clutch</td>
          <td>{bike.brakes.clutch}</td>
        </tr>

        <tr>
          <td>Bike URL</td>
          <td>
            <a href={bike.url} target="_blank" className="underline">
              {bike.url}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
