FROM gcr.io/distroless/nodejs20-debian12
ARG buildEnvironment
WORKDIR /app
COPY /.next/standalone ./
COPY /.next/static ./.next/static
COPY /public ./public
COPY /main.mjs ./

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT 3000

CMD ["/main.mjs"]
