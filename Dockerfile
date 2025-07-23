FROM gcr.io/distroless/nodejs20-debian12
ARG APP=karsilama
ARG buildEnvironment
WORKDIR /app
COPY /dist/apps/${APP}/.next/standalone ./
COPY /dist/apps/${APP}/.next/static ./dist/apps/${APP}/.next/static
COPY /dist/apps/${APP}/public ./apps/${APP}/public
COPY apps/${APP}/main.mjs ./apps/${APP}/
COPY tools ./tools

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT 3000

CMD ["/app/apps/karsilama/main.mjs"]
