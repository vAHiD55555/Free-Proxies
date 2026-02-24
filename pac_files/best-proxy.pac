function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.50.41.78:8888",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 123.54.197.21:22884",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 123.54.197.50:23211",
        "SOCKS 14.56.118.164:3128",
        "SOCKS 47.250.11.111:9080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 123.54.197.16:20963",
        "SOCKS 43.99.243.123:58367",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 123.54.197.18:20955",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 123.54.197.18:23763",
        "SOCKS 159.65.230.91:20588",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}