function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.208.102.2:8080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 47.83.236.189:1011",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 43.209.8.12:93",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 210.16.160.222:7890",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}