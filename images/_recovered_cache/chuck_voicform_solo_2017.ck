//tempo setting
//BPM tempo;

//soundchain
VoicForm wave  => dac;


0.3 => wave.gain;

60000/825*4::ms => dur quarter;
0 => wave.vibratoFreq;

//MIDI in setup
MidiIn min;
MidiMsg msg;

// MIDI port
0 => int port;

2 => int knobtwo;
1 => int knobthree;
1 => float knobfour;

//
//open the port
if ( !min.open(port) )
{
    <<< "Error: MIDI port didn't open on port: ", port >>>;
    me.exit();
}

[220, 221, 220, 219] @=> int tonic[];

[ 16.0, 8.0, 4.0, 2.0, 1.0, 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125, 0.00390625] @=> float div[];

//2d array of possible tunings, diff versions of the note
[[1/1., 100/99., 1/1.] ,      //a
[16/15., 17/16.] ,           //as
[8/7., 9/8., 10/9.] ,        //b
[6/5., 11/9.] ,              //c
[9/7., 14/11., 5/4.] ,       //cs
[15/11., 4/3.] ,             //d
[10/7., 7/5., 11/8.] ,       //ds
[3/2., 13/9.] ,              //e
[13/8., 8/5., 11/7., 14/9.] ,//f
[12/7., 5/3., 18/11.] ,      //fs
[7/4., 16/9., 9/5.] ,        //g
[17/9., 15/8., 13/7.],       //gs
[2/1., 200/99., 2/1.]] @=> float notes[][];




//global vars
int knobone, pianoVelocity, pianoNote;
Event pianoPress;

0 => float beattime;


fun void playPiano()
{
    while ( true )
    {
        
        
        (knobfour*0.01)-0.27 => wave.gain;
        
        for(0 => int i; i < 12; i++)
        {
            i%2 => int ii;
            i%3 => int ooo;
            i%4 => int uuuu;
            (i % 7 ) + (i%4) + Math.random2(0,1) => int faster;
            
            if (knobone >= 0 && knobone <= 10)
            {
                (60000/206.25)/notes[0][ii]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 32, 47 ) => wave.phonemeNum;
            }
            if (knobone >= 11 && knobone <= 20)
            {
                (60000/206.25)/notes[1][ii]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 61, 79 ) => wave.phonemeNum;
            }
            if (knobone >= 21 && knobone <= 30)
            {
                (60000/206.25)/notes[2][ooo]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 56, 59 ) => wave.phonemeNum;
            }
            if (knobone >= 31 && knobone <= 40)
            {
                (60000/206.25)/notes[3][ii]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 96, 111 ) => wave.phonemeNum;
            }
            if (knobone >= 41 && knobone <= 50)
            {
                (60000/206.25)/notes[4][ooo]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 125, 128 ) => wave.phonemeNum;
            }
            if (knobone >= 51 && knobone <= 60)
            {
                (60000/206.25)/notes[5][ii]*div[knobtwo]*div[faster] => beattime;
                Math.random2(120,123) => wave.phonemeNum;
            }
            if (knobone >= 61 && knobone <= 70)
            {
                (60000/206.25)/notes[6][ooo]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 24, 27 ) => wave.phonemeNum;
            }
            if (knobone >= 71 && knobone <= 80)
            {
                (60000/206.25)/notes[7][ii]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 88, 91 ) => wave.phonemeNum;
            }
            if (knobone >= 81 && knobone <= 90)
            {
                (60000/206.25)/notes[8][uuuu]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 24, 27 ) => wave.phonemeNum;
            }
            if (knobone >= 91 && knobone <= 100)
            {
                (60000/206.25)/notes[9][ooo]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 32, 47 ) => wave.phonemeNum;
            }
            if (knobone >= 101 && knobone <= 110)
            {
                (60000/206.25)/notes[10][ooo]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 56, 59 ) => wave.phonemeNum;
            }
            if (knobone >= 111 && knobone <= 126)
            {
                (60000/206.25)/notes[11][ooo]*div[knobtwo]*div[faster] => beattime;
                Math.random2( 61, 79 ) => wave.phonemeNum;
            }
            if (knobone == 127)
            {
                Math.random2( 14, 15 ) => wave.phonemeNum; 
                (60000/206.25)/notes[12][ooo]*div[knobtwo]*div[faster] => beattime;
            }   
            
        }
        //four different arpeggiations / octave displacements of the chord arrays via random and modulo
        for(0 => int i; i < 5; i++)
        {
            i%2 => int ii;
            i%3 => int ooo;
            i%4 => int uuuu;
            pianoNote %24=> Std.ftoi =>  int key;
            key % 12 => int lock;
            <<<lock>>>;
            if (key == 0|| key== 2|| key== 4|| key== 6  )
            {
                Math.random2(1,2)* (i % 2 ) => int coin;
                tonic[coin]*notes[lock][ooo] => wave.freq;
                beattime::ms => now;
            }
            
            if (key == 1|| key== 3|| key== 5|| key== 7 )
            {
                i % (Math.random2(3,4)) => int coin;
                tonic[coin]*notes[lock][ii] => wave.freq;
                beattime::ms => now;
            }
            
            if (key== 9||key== 10 ||key== 11|| key== 12 )
            {
                Math.random2(0,1)+ (i % 3 ) => int coin;
                tonic[coin]*notes[lock][ooo] => wave.freq;
                beattime::ms => now;
            }
            if (key == 8  )
            {
                Math.random2(0,2)+ (i % 2 ) => int coin;
                tonic[coin]*notes[key][uuuu] => wave.freq;
                beattime::ms => now;
            }   
            if ( key== 2+12|| key== 4+12|| key== 6+12 || key == 0+12)
            {
                Math.random2(1,2)* (i % 2 ) => int coin;
                tonic[coin]*notes[lock][ooo]*2 => wave.freq;
                beattime::ms => now;
            }
            
            if (key == 1+12|| key== 3+12|| key== 5+12|| key== 7+12 )
            {
                i % (Math.random2(3,4)) => int coin;
                tonic[coin]*notes[lock][ii]*2 => wave.freq;
                beattime::ms => now;
            }
            
            if (key== 9+12||key== 10+12 ||key== 11+12|| key== 12+12 )
            {
                Math.random2(0,1)+ (i % 3 ) => int coin;
                tonic[coin]*notes[lock][ooo]*2 => wave.freq;
                beattime::ms => now;
            }
            if (key == 8+12  )
            {
                Math.random2(0,2)+ (i % 2 ) => int coin;
                tonic[coin]*notes[lock][uuuu]*2 => wave.freq;
                beattime::ms => now;
            } 
        }
    }
}

spork~ playPiano();

//loop 
while (true)
{
    min => now;
    
    while ( min.recv(msg) ) 
    {   
        ///<<< msg.data1, msg.data2, msg.data3 >>>;
        
        //parsing msgs
        if ( msg.data1 == 144)
        {
            msg.data2 => pianoNote;
            msg.data3 => pianoVelocity;
            pianoPress.broadcast();
        }
        if ( msg.data2 == 1)
        {
            msg.data3 => knobone;
        }
        if ( msg.data2 == 2)
        {
            msg.data3/12 => knobtwo;
        }
        if ( msg.data2 == 3)
        {
            msg.data3/3.51 => Std.ftoi => knobthree;            
        }
        if ( msg.data2 == 4)
        {
            msg.data3 => knobfour;
        }
    }
}