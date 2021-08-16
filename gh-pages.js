var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/baldarrago/svelte-tres-en-raya',
        user: {
            name: 'baldarrago',
            email: 'baldarragorom@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)