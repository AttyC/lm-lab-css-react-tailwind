import { propertyData } from "../data/data"
import { Card } from "./card"

export const PropertiesDisplay = () => {

    console.log(propertyData.length)
    return (
      <section className='flex'>
        <ul>
          {propertyData.map((p) => (
            <Card property={p} />
          ))}
        </ul>
      </section>
    );
}