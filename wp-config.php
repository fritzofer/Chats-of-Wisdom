<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '/@XXXo>Y]rg,Y=~0%a1DJv8SJS`6<ZMoL}Q,YggNVy:)/r|&S?e:.fUk5kP0QH$G' );
define( 'SECURE_AUTH_KEY',   '?D_5 1V_Z+X|fD3S+zc@XY)]!z1[9Z!l4&l+.*g k3<;jBh_t%;,Ak@?#ImujFKx' );
define( 'LOGGED_IN_KEY',     'A;^9}lnO}Ar3Dlx%,8 Z-cI+2=77389U{4^rg:{)SBS#4d4pdDdauOqz MQR4GU*' );
define( 'NONCE_KEY',         '4kLj5hv-3G;14:|han8qwI{ijb2AII}YDPS`$ljoRe b9rWF=eXe_-`]26Mxd*gs' );
define( 'AUTH_SALT',         '(5NnpYO3N)){wCjP?i%*HC.cCu9M`brO?xQzF%:YQt=:R$9hjHDz(1A[i4^@*)$f' );
define( 'SECURE_AUTH_SALT',  '&QrK21>+sS0_BeW4C=W,*<T;;PJszZqP^Ss:b?RCw^FvxxKrwaESZC/8_s-u_=W[' );
define( 'LOGGED_IN_SALT',    'u]lj+u~~d2%B.+`uM*DgtIoHuzUM?x_8Y~Gb,jA5.Pu:S{;q_*Q5lXP1n?5vG0oT' );
define( 'NONCE_SALT',        'E9^H>.ZM14tk/-mV4p})8l>@/zSI1_c+29C{>#}Zg/Ve;b22bk.n!OMGh9T3oF9,' );
define( 'WP_CACHE_KEY_SALT', '$ox{-&zDHuD>2SOQkgP2oh?[!vsLtd2uU8F8,Kj.RFR&9dZd/,^)~tfIk;U .Y!M' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
