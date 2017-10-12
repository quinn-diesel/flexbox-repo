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
- flex: grow, basis,
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
- 