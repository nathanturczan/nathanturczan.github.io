// number of the device to open (see: chuck --probe)
2 => int device;

// the midi event
MidiIn min;
// the message for retrieving data
MidiMsg msg;

int index;
// open the device
if( !min.open( device ) ) me.exit();

// print out device that was opened
<<< "MIDI device:", min.num(), " -> ", min.name() >>>;

fun void pollMidi() {
    <<<"POLLING FOR MIDI">>>;
    while( true )
    {
        // wait on the event 'min'
        min => now;
        
        // get the message(s)
        while( min.recv(msg) )
        {
            if (msg.data1 == 144){
            msg.data2 => index;
        }

            <<< msg.data1, msg.data2, msg.data3 >>>;
        }
    } 
}
// infinite time-loop

spork ~ pollMidi();

TriOsc oscs[4];
Envelope envs[4];

for ( int i; i < 4; i++ ) {
    oscs[i] => envs[i] => dac.chan(i);
}

[
[ // slide 0
  [46, 58], // voice a
  [58, 46], // voice b
  [46, 58], // voice c
  [58, 46]  // voice d
 ],
 [ // slide 1
  [56, 58], // voice a
  [53, 54], // voice b
  [49, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 2
  [57, 58], // voice a
  [53, 54], // voice b
  [49, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 3
  [57, 58], // voice a
  [53, 55], // voice b
  [49, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 4
  [57, 58], // voice a
  [53, 55], // voice b
  [49, 52], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 5
  [57, 58], // voice a
  [53, 55], // voice b
  [50, 52], // voice c
  [46, 48]  // voice d
 ],
  [ // slide 6
  [57, 58], // voice a
  [54, 55], // voice b
  [50, 52], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 7
  [57, 58], // voice a
  [54, 55], // voice b
  [50, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 8
  [57, 58], // voice a
  [53, 55], // voice b
  [50, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 9
  [57, 58], // voice a
  [53, 54], // voice b
  [50, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 10
  [56, 58], // voice a
  [53, 54], // voice b
  [50, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 11
  [56, 58], // voice a
  [53, 54], // voice b
  [50, 51], // voice c
  [46, 47]  // voice d
 ],
 [ // slide 12
  [56, 58], // voice a
  [53, 54], // voice b
  [49, 51], // voice c
  [46, 47]  // voice d
 ],
 [ // slide 13
  [56, 58], // voice a
  [53, 55], // voice b
  [49, 51], // voice c
  [46, 47]  // voice d
 ],
 [ // slide 14
  [56, 58], // voice a
  [53, 55], // voice b
  [49, 51], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 15
  [56, 58], // voice a
  [53, 55], // voice b
  [49, 52], // voice c
  [46, 48]  // voice d
 ],
 [ // slide 16
  [56, 58], // voice a
  [53, 55], // voice b
  [50, 52], // voice c
  [46, 48]  // voice d
 ]
] @=> int score[][][];

dur myDuration[4];
dur quarterNote, eighthNote, sixteenthNote, thirtysecondNote;
1.0 :: second => quarterNote;
quarterNote*0.5 => eighthNote;
eighthNote*0.5 => sixteenthNote;
quarterNote*0.5 => thirtysecondNote;
        
// store data in array
[quarterNote, eighthNote, sixteenthNote, thirtysecondNote] @=> myDuration;

while(true) {
    <<<index>>>;
    for( int i; i < 4; i++ ) {
        spork ~ playSomething(i);
    }
    
    myDuration[Math.random2(0,3)] => now;

}

fun void playSomething(int voice) {
      Std.mtof(score[index][voice][Math.random2(0, 1)]+12) => oscs[voice].freq;  
      envs[voice].keyOn();
      myDuration[Math.random2(0,3)] => now;
      envs[voice].keyOff();
}
