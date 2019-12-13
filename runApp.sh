#!/bin/bash

run_app() {
    (yarn --cwd hypernova-aggregator buildAll)
    (yarn --cwd hypernova-aggregator runAll)
}

run_app