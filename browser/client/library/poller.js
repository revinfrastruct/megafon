/* global fetch */
import 'whatwg-fetch'
import store from '../store'
import {addEvent, removeEvent} from '../actions'

export default class Poller {
  constructor () {
    this.intervals = []
  }

  add (channel) {
    this.intervals = [...this.intervals, {
      channel,
      interval: setInterval(this.fetchEvents, 5000, channel)
    }]

    this.fetchEvents(channel)
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
    const url =
      `https://modkraft.s3.eu-central-1.amazonaws.com/tickers/data/${channel}.json`

    fetch(url).then(response => response.json()).then(json => {
      const events = json['+']
      const removedEvents = json['-']

      events.forEach(event => {
        store.dispatch(addEvent({
          id: event.id,
          description: event.content,
          createdAt: new Date(event.time * 1000),
          channel,
          kind: 'tweet'
        }))
      })

      removedEvents.forEach(id => {
        store.dispatch(removeEvent(id))
      })
    })
  }
}
