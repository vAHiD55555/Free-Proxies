function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:34984",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 8.219.148.250:1011",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 67.43.228.252:13997",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 157.10.7.211:8080",
        "SOCKS 43.208.25.125:14",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 44.213.1.118:80",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 121.230.8.238:1080",
        "SOCKS 157.180.121.252:57279",
        "SOCKS 52.202.30.36:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}