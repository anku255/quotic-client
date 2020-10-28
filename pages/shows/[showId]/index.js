import React from 'react';
import {useRouter} from 'next/router';
import { useQuoteManyQuery } from '../../../generated/apolloComponents'
import { withApollo } from "../../../lib/withApollo";
import QuoteCard from '../../../components/Quote';

const ShowPage = () => {

  const router = useRouter();
  const {data, loading, error } = useQuoteManyQuery({
    variables: {
      filter: {
        show: router.query.showId
      }
    }
  })


  if(loading) return <h1>Loading...</h1>


  return (
    <div className="max-w-lg mx-auto">
      {data.quoteMany.map(quote => (
        <QuoteCard 
          key={quote._id}
          quote={quote}
        />
      ))}
    </div>
  )
}

export default withApollo()(ShowPage);
