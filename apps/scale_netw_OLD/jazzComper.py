#figure out if its possible for MIDI to come from browser 
#and read by hardware / direct to instruments


import music21

with open('voicings_w_supersets.json') as f:
	voicings_w_supersets = json.load(f)    

with open('chords_w_subsets.json') as f:
	chords_w_subsets = json.load(f)   

with open('voicing_metadata.json') as f:
	voicing_metadata = json.load(f) 

#connect to realtime midi device

name = 'c_M7-0'
progression_list = []



for i in range(100):
	print(name)
	progression_list.append(name)

	name = random.choice()

