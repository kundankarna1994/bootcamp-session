module.exports = {
    "app/**/*.php": [
        "./vendor/bin/pint",
        "./vendor/bin/phpstan analyse --memory-limit=2G",
    ],
};
