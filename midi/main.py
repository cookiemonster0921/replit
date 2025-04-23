import mido


midi_file = mido.MidiFile('Never-Gonna-Give-You-Up-3.mid')

def midi_to_frequency(midi_note):
    # A4 (MIDI note 69) has a frequency of 440 Hz
    A4_frequency = 440.0
    return A4_frequency * 2**((midi_note - 69) / 12)

notes = []
#print(midi_file.tracks)
for track in midi_file.tracks:
    current_time = 0
    for msg in track:
        if msg.type == 'note_on':
           # print(msg.time)
            notes.append((midi_to_frequency(msg.note), msg.time))
#print(notes)
f = open("music.txt", "a")
count = 0
for i in notes:
    #print(type(i[1]))
    f.write(f'{int(int(i[0]))},')
""" if i[1] == 0:
        pass
        f.write(f'{int(int(i[0]))},')
        count += 1
        if count % 1000 == 0:
            f.write('\n\n\n\n\n')
        continue
    else:
        #print(int(i[1]/4))
        for z in range(int(int(i[1])/8)):
            pass
            f.write('0,')
            count += 1
            if count % 1000 == 0:
                f.write('\n\n\n\n\n')"""
