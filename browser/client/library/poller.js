/* global fetch */
import 'whatwg-fetch'
import store from '../store'
import {addEvent} from '../actions'

export default class Poller {
  constructor () {
    this.intervals = []
  }

  add (channel) {
    this.intervals = [...this.intervals, {
      channel,
      interval: setInterval(this.fetchEvents, 5000, channel)
    }]
  }

  remove (channel) {
    const interval = this.intervals.find(interval => {
      return interval.channel === channel
    })

    if (!interval) {
      throw new Error(`Interval channel:${channel} not found!`)
    }

    clearInterval(interval.interval)

    const idx = this.intervals.indexOf(interval)
    this.intervals = [
      ...this.intervals.splice(0, idx),
      ...this.intervals.slice(idx + 1)
    ]
  }

  fetchEvents (channel) {
    const url = `https://modkraft.s3.amazonaws.com/tickers/data/${channel}.json`

    fetch(url).then(response => response.json()).then(json => {
      for (let key in json) {
        const {content: description, time: createdAt} = json[key]

        if (Number.isInteger(parseInt(key, 10))) {
          store.dispatch(addEvent({
            id: parseInt(key, 10),
            title: 'hello',
            description,
            createdAt,
            channel,
            kind: 'tweet'
          }))
        }
      }
    })
  }
}
