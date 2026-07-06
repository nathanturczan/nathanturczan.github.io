//soundchainz
Rhodey p => dac;

SinOsc wave => Pan2 pan => dac;
1 => wave.gain;
Math.random2f(-1.0,1.0) => pan.pan;

//MIDI in setup
MidiIn min;
MidiMsg msg;

// MIDI port
1 => int port;

2 => int knobtwo;

//
1/1 => float a;
25./24 => float as;
15./14 => float bb;
9./8 => float b;
7./6 => float cb;
6./5 => float c;
5./4 => float cs;
9./7 => float db;
4./3 => float d;
7./5 => float ds;
36./25 => float eb;
3./2 => float e;
14./9 => float fb;
8./5 => float f;
5./3 => float fs;
7./4 => float gb;
9./5 => float g;
15./8 => float gs;
27./14 => float ab;
2./1 => float a2;

//open the port
if ( !min.open(port) )
{
    <<< "Error: MIDI port didn't open on port: ", port >>>;
    me.exit();
}

[2.0, 1.0, 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625] @=> float div[];


//global vars
int pianoNote, pianoVelocity;
Event pianoPress;

0 => float beattime;

fun void playPiano()
{
    while ( true )
    {
        for(0 => int i; i < 4; i++)
        {
            i => int faster;
            <<< i >>>;
            if (pianoNote >= 0 && pianoNote <= 5)
            {
                (60000/206.25)/a*div[knobtwo]*div[faster] => beattime;
                //<<<"0", beattime, a>>>;
            }
            if (pianoNote >= 6 && pianoNote <= 11)
            {
                (60000/206.25)/as*div[knobtwo]*div[faster] => beattime;
                //<<<"1", beattime, as>>>;
            }
            if (pianoNote >= 12 && pianoNote <= 17)
            {
                (60000/206.25)/bb*div[knobtwo]*div[faster] => beattime;
                //<<<"2", beattime,bb>>>;
            }
            if (pianoNote >= 18 && pianoNote <= 23)
            {
                (60000/206.25)/b*div[knobtwo]*div[faster] => beattime;
                //<<<"3", beattime,b>>>;
            }
            if (pianoNote >= 24 && pianoNote <= 29)
            {
                (60000/206.25)/cb*div[knobtwo]*div[faster] => beattime;
                //<<<"4", beattime,cb>>>;
            }
            if (pianoNote >= 30 && pianoNote <= 35)
            {
                (60000/206.25)/c*div[knobtwo]*div[faster] => beattime;
                //<<<"5", beattime,c>>>;
            }
            if (pianoNote >= 36 && pianoNote <= 41)
            {
                (60000/206.25)/cs*div[knobtwo]*div[faster] => beattime;
                //<<<"6", beattime,cs>>>;
            }
            if (pianoNote >= 42 && pianoNote <= 47)
            {
                (60000/206.25)/db*div[knobtwo]*div[faster] => beattime;
                //<<<"7", beattime,db>>>;
            }
            if (pianoNote >= 48 && pianoNote <= 53)
            {
                (60000/206.25)/d*div[knobtwo]*div[faster] => beattime;
                //<<<"8", beattime,d>>>;
            }
            if (pianoNote >= 54 && pianoNote <= 59)
            {
                (60000/206.25)/ds*div[knobtwo]*div[faster] => beattime;
                //<<<"9", beattime,ds>>>;
            }
            if (pianoNote >= 60 && pianoNote <= 65)
            {
                (60000/206.25)/eb*div[knobtwo]*div[faster] => beattime;
                //<<<"10", beattime,eb>>>;
            }
            if (pianoNote >= 66 && pianoNote <= 71)
            {
                (60000/206.25)/e*div[knobtwo]*div[faster] => beattime;
                //<<<"11", beattime,e>>>;
            }
            if (pianoNote >= 72 && pianoNote <= 77)
            {
                (60000/206.25)/fb*div[knobtwo]*div[faster] => beattime;
                //<<<"12", beattime,fb>>>;
            }
            if (pianoNote >= 78 && pianoNote <= 83)
            {
                (60000/206.25)/f*div[knobtwo]*div[faster] => beattime;
                //<<<"13", beattime,f>>>;
            }
            if (pianoNote >= 84 && pianoNote <= 89)
            {
                (60000/206.25)/fs*div[knobtwo]*div[faster] => beattime;
                //<<<"14", beattime,fs>>>;
            }
            if (pianoNote >= 90 && pianoNote <= 95)
            {
                (60000/206.25)/gb*div[knobtwo]*div[faster] => beattime;
                //<<<"15", beattime,gb>>>;
            }
            if (pianoNote >= 96 && pianoNote <= 101)
            {
                (60000/206.25)/g*div[knobtwo]*div[faster] => beattime;
                //<<<"16", beattime,g>>>;
            }
            if (pianoNote >= 102 && pianoNote <= 107)
            {
                (60000/206.25)/gs*div[knobtwo]*div[faster] => beattime;
                //<<<"17", beattime,gs>>>;
            }
            if (pianoNote >= 108 && pianoNote <= 113)
            {
                (60000/206.25)/ab*div[knobtwo]*div[faster] => beattime;
                //<<<"18", beattime,ab>>>;
            }
            if (pianoNote >= 114 && pianoNote <= 127)
            {
                (60000/206.25)/a2*div[knobtwo]*div[faster] => beattime;
                //<<<"19", beattime,ab>>>;
            }
            
        }
        for(0 => int coin; coin < 2; coin++)
        {
        if ( coin == 0 )
            110 => wave.freq;
        if ( coin == 1 )
            27.5 => wave.freq;
        if ( coin == 2 )
            55 => wave.freq;
        beattime::ms => now;
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
        //parsing msgs
        if ( msg.data2 == 1)
        {
            msg.data1 => pianoVelocity;
            msg.data3 => pianoNote;
            pianoPress.broadcast();
        }
        if ( msg.data2 == 2)
        {
            msg.data3/18 => knobtwo;
        }
        else if (msg.data1 == 128)
        {
            0 => pianoVelocity;
            pianoPress.broadcast();
        }
    }
}