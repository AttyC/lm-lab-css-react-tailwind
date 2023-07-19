export interface IProperty {
    property: {
        location: string; 
        country: string; 
        property_type: string; 
        bedroom_count: number; 
        bathroom_count: number; 
        price: string; 
        image_urls: string[]; 
        title: string; 
        description: string;
    };
}

export const Card: React.FC<IProperty> = ({ property: { title, location, country, property_type, image_urls, description, bedroom_count, bathroom_count, price } }) => {

    return (
      <>
        <li className='flex justify-between m-8 border-gray-100 border-2 text-base text-left hover:shadow-xl hover:scale-105 transition-transform duration-500'>
          <div className='flex-col p-8'>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <div className='address flex my-2'>
              <p className='pr-1'>{location}, </p>
              <p>{country}</p>
            </div>
            <p className='my-2'>Property Type: {property_type}</p>
            <p className='description my-2'>
              About the property: {description}
            </p>
            <p className='my-2'>Bedrooms: {bedroom_count}</p>
            <p className='my-2'>Bathrooms: {bathroom_count}</p>
            <p className='my-2'>Price (GBP): {price}</p>
          </div>
          <img src={image_urls[0]} className='max-w-sm' />
        </li>
      </>
    );
}