/* Planet index */
const MERCURY = 0;
const VENUS   = 1;
const EARTH   = 2;
const MARS    = 3;
const JUPITER = 4;
const SATURN  = 5;
const URANUS  = 6;
const NEPTUNE = 7;
const PLUTO   = 8;

/* Name of planets, index by planet index */
var NAME = [];
NAME[MERCURY] = 'Mercury';
NAME[VENUS]   = 'Venus';
NAME[EARTH]   = 'Earth';
NAME[MARS]    = 'Mars';
NAME[JUPITER] = 'Jupiter';
NAME[SATURN]  = 'Saturn';
NAME[URANUS]  = 'Uranus';
NAME[NEPTUNE] = 'Neptune';
NAME[PLUTO]   = 'Pluto';

/* Path of images of planets, index by planet index */
var IMG = [];
IMG[MERCURY] = 'images/mercury.jpg';
IMG[VENUS]   = 'images/venus.jpg';
IMG[EARTH]   = 'images/earth.jpg';
IMG[MARS]    = 'images/mars.jpg';
IMG[JUPITER] = 'images/jupiter.jpg';
IMG[SATURN]  = 'images/saturn.jpg';
IMG[URANUS]  = 'images/uranus.jpg';
IMG[NEPTUNE] = 'images/neptune.jpg';
IMG[PLUTO]   = 'images/pluto.jpg';

/* Metric index */
const MASS          = 0;
const DIAMETER      = 1;
const GRAVITY       = 2;
const LEN_OF_DAY    = 3;
const DIST_FROM_SUN = 4;
const ORB_PERIOD    = 5;
const NUM_OF_MOON   = 6;

/* Rank of planets, sorted by different metrics */
var RANKS = [];
RANKS[MASS]          = [PLUTO, MERCURY, MARS, VENUS, EARTH, URANUS, NEPTUNE, SATURN, JUPITER];
RANKS[DIAMETER]      = [PLUTO, MERCURY, MARS, VENUS, EARTH, NEPTUNE, URANUS, SATURN, JUPITER];
RANKS[GRAVITY]       = [PLUTO, MARS, MERCURY, URANUS, VENUS, SATURN, EARTH, NEPTUNE, JUPITER];
RANKS[LEN_OF_DAY]    = [JUPITER, SATURN, NEPTUNE, URANUS, EARTH, MARS, PLUTO, VENUS, MERCURY];
RANKS[DIST_FROM_SUN] = [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE, PLUTO];
RANKS[ORB_PERIOD]    = [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE, PLUTO];
RANKS[NUM_OF_MOON]   = [MERCURY, VENUS, EARTH, MARS, PLUTO, NEPTUNE, URANUS, SATURN, JUPITER];

/* Metric name with unit used. */
var METRIC_NAME = [];
METRIC_NAME[MASS]          = "Mass (10^24 kg)";
METRIC_NAME[DIAMETER]      = "Diameter (km)";
METRIC_NAME[GRAVITY]       = "Gravity (m/s^2)";
METRIC_NAME[LEN_OF_DAY]    = "Length of Day (hours)";
METRIC_NAME[DIST_FROM_SUN] = "Distance from Sun (10^6 km)";
METRIC_NAME[ORB_PERIOD]    = "Orbital Period (days)";
METRIC_NAME[NUM_OF_MOON]   = "Number of Moons";

/* Planet facts values measured by different metrics. */
var VALUES = [];

VALUES[MASS] = [];
VALUES[MASS][MERCURY] = '0.330';
VALUES[MASS][VENUS]   = '4.87';
VALUES[MASS][EARTH]   = '5.97';
VALUES[MASS][MARS]    = '0.642';
VALUES[MASS][JUPITER] = '1898';
VALUES[MASS][SATURN]  = '568';
VALUES[MASS][URANUS]  = '86.8';
VALUES[MASS][NEPTUNE] = '102';
VALUES[MASS][PLUTO]   = '0.0146';

VALUES[DIAMETER] = [];
VALUES[DIAMETER][MERCURY] = '4879';
VALUES[DIAMETER][VENUS]   = '12,104';
VALUES[DIAMETER][EARTH]   = '12,756';
VALUES[DIAMETER][MARS]    = '6792';
VALUES[DIAMETER][JUPITER] = '142,984';
VALUES[DIAMETER][SATURN]  = '120,536';
VALUES[DIAMETER][URANUS]  = '51,118';
VALUES[DIAMETER][NEPTUNE] = '49,528';
VALUES[DIAMETER][PLUTO]   = '2370';

VALUES[GRAVITY] = [];
VALUES[GRAVITY][MERCURY] = '3.7';
VALUES[GRAVITY][VENUS]   = '8.9';
VALUES[GRAVITY][EARTH]   = '9.8';
VALUES[GRAVITY][MARS]    = '3.7';
VALUES[GRAVITY][JUPITER] = '23.1';
VALUES[GRAVITY][SATURN]  = '9.0';
VALUES[GRAVITY][URANUS]  = '8.7';
VALUES[GRAVITY][NEPTUNE] = '11.0';
VALUES[GRAVITY][PLUTO]   = '0.7';

VALUES[LEN_OF_DAY] = [];
VALUES[LEN_OF_DAY][MERCURY] = '4222.6';
VALUES[LEN_OF_DAY][VENUS]   = '2802';
VALUES[LEN_OF_DAY][EARTH]   = '24.0';
VALUES[LEN_OF_DAY][MARS]    = '24.7';
VALUES[LEN_OF_DAY][JUPITER] = '9.9';
VALUES[LEN_OF_DAY][SATURN]  = '10.7';
VALUES[LEN_OF_DAY][URANUS]  = '17.2';
VALUES[LEN_OF_DAY][NEPTUNE] = '16.1';
VALUES[LEN_OF_DAY][PLUTO]   = '155.3';

VALUES[DIST_FROM_SUN] = [];
VALUES[DIST_FROM_SUN][MERCURY] = '57.9';
VALUES[DIST_FROM_SUN][VENUS]   = '108.2';
VALUES[DIST_FROM_SUN][EARTH]   = '149.6';
VALUES[DIST_FROM_SUN][MARS]    = '227.9';
VALUES[DIST_FROM_SUN][JUPITER] = '778.6';
VALUES[DIST_FROM_SUN][SATURN]  = '1433.5';
VALUES[DIST_FROM_SUN][URANUS]  = '2872.5';
VALUES[DIST_FROM_SUN][NEPTUNE] = '4495.1';
VALUES[DIST_FROM_SUN][PLUTO]   = '5906.4';

VALUES[ORB_PERIOD] = [];
VALUES[ORB_PERIOD][MERCURY] = '88.0';
VALUES[ORB_PERIOD][VENUS]   = '224.7';
VALUES[ORB_PERIOD][EARTH]   = '365.2';
VALUES[ORB_PERIOD][MARS]    = '687.0';
VALUES[ORB_PERIOD][JUPITER] = '4331';
VALUES[ORB_PERIOD][SATURN]  = '10,747';
VALUES[ORB_PERIOD][URANUS]  = '30,589';
VALUES[ORB_PERIOD][NEPTUNE] = '59,800';
VALUES[ORB_PERIOD][PLUTO]   = '90,560';

VALUES[NUM_OF_MOON] = [];
VALUES[NUM_OF_MOON][MERCURY] = '0';
VALUES[NUM_OF_MOON][VENUS]   = '0';
VALUES[NUM_OF_MOON][EARTH]   = '1';
VALUES[NUM_OF_MOON][MARS]    = '2';
VALUES[NUM_OF_MOON][JUPITER] = '67';
VALUES[NUM_OF_MOON][SATURN]  = '62';
VALUES[NUM_OF_MOON][URANUS]  = '27';
VALUES[NUM_OF_MOON][NEPTUNE] = '14';
VALUES[NUM_OF_MOON][PLUTO]   = '5';