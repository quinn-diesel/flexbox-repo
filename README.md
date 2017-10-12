# What The Flexbox?!

NOTES NOTES NOTES

- Everything to know about flexbox

1 - INTRO
- There is a lot of combination of property values that we have to use
- 13 are the main fundamentals
- The 7 are real life examples

2 - INTRO TO flexbox
- display: flex; is how to initiate
- have to put floats, percentages and everything that we usually do
- start with a container
- container goes across the whole page - like a block element
- if you make the container a flex it will make the children flex items
- vh - viewport height, make the container stretch the entire area. * not to do with flexbox but still good to get set up

3 - Flex Direction
- Flex direction sets the axis when you are coding what you are doing
- CSS tricks - complete guide to flexboox - shows how you can centre the content
- flex-direction - row + column
- row side by side
- column going down
- row main axis - left to right & cross axis going from top to bottom
- column main axis - going down ( boxes go down ) & cross axis goes from left to right
- axis controls where it goes, cross axis is how the children fit into the container
- row only really if we are unapplying what is going on

4 - Wrapping Elements with Flexbox
- this is easier if you have floats and everything else
- flex-items are the children
- selected the flex item with the class .
- the nature of flexbox will evenly distribute the px throughout the container
- flex-wrap: wrap;
- it will create the divs to evenly spread throughout the container
- flex-items will try to stretch across the container
- also have to split up the items are in the container
- items are going from left to right because the axis is defaulted to row
- some languages work in a different format
- when you switch the axis it will change things to go down as much as possible
- margin is not part of the box model - overbudget for the area - this will break onto the other side
- calc is the new thing in css so you add in the margin

5 - Flexbox Ordering
- A way to move the DOM Elements
- flex:1 it will evenly distribute the flex going across the page
- it distributes that equally
- the default order is set to 0, 1 will put it onto the end. it is just like an array of information. start at 0 then 1 then 2 etc. you just have to choose the right box
- this is really useful for a responsive web design
- this is an option to get a footer order
- orders can also go negative if you want
- works like the z index
- caveat: the hover element will be effected when you are trying to choose different things


6 - Aligning, centering and justifying content
- This is the main points of flexbox
- Justify-content: flex-end, starting on the right hand side
- center - puts it in the center
- space between - will evenly space in between everything
- space-around: changing thing to column will take out the spacing that is going down / disappear
- to take adv of the main axis with space-around, you need to get a min-height on the container
- change the px size of the flex-items

7 - Alignment and centering with align-items
- Main thing with justify content - align things along the main axis going along
- Have to drive that point in
- Align item
- We are concerned with the cross axis
- align-center container will not work if the container does not have any height to it
- it is work using with the min-height: vh
- the automatic setting is stretch, this will stretch itself to the bottom of the container
- start, end, center, baseline
- when you change the baseline you can change the different sizes with
- this useful when you have things you want to align items that are different sizes
- you can always make sure to centre items to do the cross axis

8 - Align and centering with align-content
- align-items
- justify and align have extra space, it will change what it does
- justify with space between will change the MAIN axis
- align content - this takes the same parameters but it is going to change the CROSS axis
- align only works when there is the extra space on the cross axis
- remember flex-wrap: wrap;
- it will automatically stretch the elements cross the div
- flex- start - the height is taking how much height which they need. it will equal
- align will have the same properties as justify: this will be
- we are only concerned with the cross access

9 - Align-self
- what happens when you want to only apply style to a specific div that is going on
- align-self: stretch
- this is so you can choose one item you want to do

10 - Flexbox sizing with the flex property
- flex: grow, basis, - use a number like 1, 2, 3 etc
- flex: answers the question with the extra space OR if there is NO extra
- flexbox will intelligently look at where everything needs to go
- width of the items will be auto - which is the content inside of it
- flex: 1; this is the exact amount of space you needs
- FLEX? At what proportion should I size something up or down?
- 1 = each of item should divy up the space the space they are using
- if you make the item have a size of 2 it should have double the space as anythign else
- when you move from too much space to not enough
- when you want to eat up twice as much as everything else
- you can keep going with the sizing
- it's all about the space that will be divied up between all div items

11 - Flex- GROW, SHRINK and basis
- flex - grow, basis and SHRINK
- flex-grow: 1 this is a short hand for when you have extra space how much should something take up
- flex-basis - before you start taking space how high/ low should things be?
- what happens when there is extra room
- if there is grow on one and not the other than it will take up the remaining space
- basis will be used with grow and shrink
- the default of everything is 0
- everything will than work the same as the flex property normally
- when the browser changes size to be under?
- elements will start to chop them down.
- this is because there is no WRAPPING!
- make sure to add the wrapping so when the screen changes size it will wrap down automatically
- when there is no enough room, evenly divide everything amongst itself
- shrink - how much of something should it give up when the box is shrinking
- it's about how much they will grow/ shrink when the screen changes size
- order first GROW, then SHRINK then BASIS in a single line
- can be done in one line, set it in the short-hand and work out the layout that you need to use
- give up hard widths but that is the whole point of flexbox


12 - Flex-Basis and Wrapping working together
- flex-basis: 500px
- when you turn on wrap the items will be getting their correct sizes
- then turn on flex-grow: 1
- since flexwrap is turned on
- grow, shrink and basis will only effect the row that it is being applied to
- what happens when you change the axis to column?
- items will stack vertically
- you will need to make sure to have a min-height 100vh
- the change to the px will be given to each of the divs
- the browsers will scroll
- it's all about the way things are stretching and working together for the divs

----- everything here will be codealongs -------

13 - Cross Browser Support and Autoprefixer
- we can run the flexbox through a compiler
- it's called Autoprefixer - takes the latest and greatest flexbox code and pre-fix all the possible vendor prefixes
- autoprefixer will change a the elements that you want to do
- the idea is to write the code and then compile the code into what you want to use
- GULP is what we are going to use
- package json track the version and plugins that need to install
- touch gulpfile.js
- npm install gulp --save-dev - install gulp for us
- npm install gulp-autoprefixer --save-dev
- the way it works is you choose gulp as the src to use and then you pipe the information into the autoprefixer and pipe it into an output directory
- gulp is an easy way to make sure flexbox is accessible to all of the browsers

14 - Pure Flexbox Navigation
- Navigation are one of the best things to use navigation with
- Had to change where the src of the autoprefixer is looking and where I had to set up it up to use
- there is no flexbox in the math that I am going to do
- it's about throwing elements at the div that we want to work with. there is no problem with adding things back to 100%
- the ul is going to be the nav container

15 - Mobile content reordering with Flexbox
- you can use slideToggle to toggle when things go off and on again
- can't use slideToggle and have to toggle our own class of toggle

16 - NESTING vertical and horizontal centering
- How to add the css and html in order to nest the different things
- remember to give everything a red border in order to see what is going on with what you are doing
- we want the list items and the links to stretch all the way
- when nesting you have add a span to all the elements in the html
lazygit 'can nest flexbox in each other so the items can align more easily. however when we are doing if there is no child element in the flex item then a span can be added. then flex basis can be made 100%'

17 - Flexbox Pricing Grid
- when you apply margin to an item with an explicit width, it will eat into the content you are using

18 - Flexbox equal height columns and leftover elements
- it's about making the extra space 0 for the grow
- you can use the grow of 0 in order to create extra space for the flex justify. you can also use the calc(% - px) in order to make sure that the divs dont

19 - Flexbox in single line height
- 
