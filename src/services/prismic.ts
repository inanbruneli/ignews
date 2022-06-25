import * as Prismic from '@prismicio/client';

export function getPrismicClient(){
  
  const prismic = Prismic.createClient(
    'inan-ignews',
    {
      accessToken:  'MC5ZcWdUcUJFQUFDTUFWT2o4.77-9dO-_ve-_vWTvv709Ru-_ve-_vWQ1Z--_vQjvv73vv73vv73vv70YNO-_vSnvv70TPjXvv73vv73vv73vv71u',
    }
  )

  return prismic;
}