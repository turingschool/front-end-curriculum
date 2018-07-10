# React Native Intro

## Prework

#### Install and open xcode
- In the app store on your mac, find xcode and install
- Open xcode and when prompted install the `command line developer tools`.

#### Install and setup exp
`npm install exp --global`

`exp init my-new-project`

When prompted, use the blank template.

`cd my-new-project`

`exp start`

create an expo account

open a new tab in terminal and run 

`exp ios`

## Native vs React-Native vs PWA 
|                   | Native        | React-Native | PWA
| ---               |   :-:         |   :-:  | :-: 
| UI                | Native        | Native | Web / Can look Native 
| App Store         | Yes           | Yes    | No  
| Cross Platform    | No            | Yes    | Yes 
| Native API Access | Full          | Partial to High | Partial & Getting Better 
| Skill Set         | Swift/Java    | React-Native | HTML, CSS, JS  

## HTML vs React-Native Components

| HTML | React-Native |
| --- | --- |
| div | View | 
| span | Text | 
| button | Button | 
| input [type=text] | TextInput | 
| input [type=checkbox] | Switch | 
| select | Picker or ActionSheetIOS | 
| img | Image | 

## Styling

It's all flexbox. You do not need to specify a unit of measurement as everything uses [density-independent pixels](https://medium.com/@0saurabhgour/react-native-density-independent-pixels-pixelratio-1f10d86f631).

```css
<!-- <div class="bigblue"></div> -->

.bigblue {
  background-color: red;
  font-weight: bold;
  font-size: 30px;
}
```

```jsx
// <View style={styles.bigblue}></View>

const styles = StyleSheet.create({
  bigblue: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 30
  }
});
```