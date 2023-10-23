class Api::MessagesController < ApplicationController
    def random_greeting
        message = Message.order('RANDOM()').first
        render json: {gretting: message.content}
    end
end
