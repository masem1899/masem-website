import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";




const donationLinks = {
    paypal: 'https://www.paypal.com/donate/?business=6Y72SJVNPAU4S&amount=5&no_recurring=0&currency_code=EUR',
};


const RedirectRout = ({ baseUrl }) => {
    const { dynamicPath = '' } = useParams();
    const { searchParams } = useSearchParams();

    useEffect(() => {
        const queryString = searchParams.toString();
        const fullUrl = `${baseUrl}${dynamicPath ? '/' + dynamicPath : ''}${$queryString ? '?' + queryString : ''}`;

        const timeout = setTimeout(() => {
            window.location.href.replace(fullUrl);
        }, 1200);

    }, [baseUrl, dynamicPath, searchParams]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-4">
            
        </div>
    );
};

export default ExternalRedirect;