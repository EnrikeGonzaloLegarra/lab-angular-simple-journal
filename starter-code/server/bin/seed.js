/*jshint esversion:6*/
const mongoose = require('mongoose');
const JournalEntry = require('../models/journal-entry');

mongoose.connect('mongodb://localhost/journal-development');

const journalEntries = [{
  title: '1-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '2-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '3-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '4-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '5-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '6-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '7-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '8-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '9-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '10-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '11-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '12-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}, {
  title: '13-Lorem ipsum dolor sit amet',
  content: 'consectetur adipiscing elit. Maecenas commodo purus et est condimentum consequat. Aliquam sed erat hendrerit, congue urna at, commodo felis. Pellentesque vel est enim. Suspendisse gravida, quam non hendrerit interdum, erat nisi iaculis turpis, porta aliquam diam orci luctus purus. Integer dictum eleifend tortor, vitae euismod arcu feugiat vehicula. Integer faucibus nisi eget lorem elementum volutpat.'
}];

JournalEntry.create(journalEntries, function(err, entries) {
  if (err) {
    return console.log(err);
  }
  entries.forEach(function(elem) {
    console.log(elem.title);
  });


});
