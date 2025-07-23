FROM gcr.io/distroless/nodejs20-debian12
ARG buildEnvironment
WORKDIR /app
COPY /.next/standalone ./
COPY /.next/static ./.next/static
COPY /public ./public

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["server.js"]