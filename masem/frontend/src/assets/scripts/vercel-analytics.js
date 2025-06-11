(function() {
    
    const getConnectionSpeed = () => {
        return 'connection' in navigator && navigator['connection'] && 'effectiveType' in navigator['connection']
            ? navigator['connection']['effectiveType']
            : '';
    };

    const getNavigationEntry = () => {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        
        if(navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now()) {
            return navigationEntry;
        }
    };

    const calcTTBV = (navEntry) => {
        const activationStart = navEntry?.activationStart ?? 0;
        const TTBF = Math.max(navEntry.responseStart - activationStart, 0);
        return TTBF;
    };

    const navigationEntry = getNavigationEntry();

    if (navigationEntry) {
        console.info('TTBF', calcTTBV(navigationEntry));
    }
    
}());


